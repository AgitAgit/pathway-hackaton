const { faker } = require("@faker-js/faker");
const bcrypt = require("bcrypt");
const User = require("./models/userModel");
const Post = require("./models/postModel");
const Comment = require("./models/commentModel");
const Follower = require("./models/followerModel");

async function checkCollectionEmpty() {
  try {
    // await removeData();
    const isCollectionEmpty = (await User.countDocuments()) <= 1;
    if (isCollectionEmpty) {
      console.log("The User collection is empty.Injecting data...");
      injectData();
    } else {
      console.log("The User collection has documents.No need to inject data.");
    }
  } catch (error) {
    console.error("Error checking User collection:", error);
  }
}

const injectData = async () => {
  const users = await User.insertMany(
    await Promise.all(
      Array.from({ length: 10 }).map(async () => {
        const password = faker.internet.password(6);
        console.log(password);
        return {
          displayName: faker.person.fullName(),
          email: faker.internet.email(),
          username: faker.internet.username().substring(0, 8),
          plainPassword: password,
          password: await bcrypt.hash(password, 10),
          profilePic: faker.image.url({ width: 500, height: 500 }),
          role: faker.helpers.arrayElement(["Member"]),
        };
      })
    )
  );

  const posts = await Post.insertMany(
    Array.from({ length: 20 }).map(() => ({
      title: faker.lorem.sentence(),
      postImageUrl: faker.image.url({ width: 500, height: 500 }),
      content: faker.lorem.sentences(1),
      authorId: faker.helpers.arrayElement(users)._id,
      likedBy: faker.helpers
        .shuffle(users)
        .slice(0, Math.floor(Math.random() * users.length)), // Random number of users for 'likedBy'
      commentIds: [],
    }))
  );

  const followers = await Follower.insertMany(
    Array.from({ length: 50 }).map(() => ({
      userId: faker.helpers.arrayElement(users)._id,
      followerId: faker.helpers.arrayElement(users)._id,
    }))
  );

  const comments = await Comment.insertMany(
    Array.from({ length: 60 }).map(() => ({
      commentContent: faker.lorem.words(2),
      parentPostId: faker.helpers.arrayElement(posts)._id,
      authorId: faker.helpers.arrayElement(users)._id,
    }))
  );

  // Populate commentIds in posts
  await Promise.all(
    comments.map((comment) => {
      const randomPost = faker.helpers.arrayElement(posts); // Select a random post
      return Post.findByIdAndUpdate(
        randomPost._id,
        { $push: { commentIds: comment._id } }, // Add the comment ID to the post's commentIds
        { new: true } // Return the updated document (optional)
      );
    })
  );
};

const removeData = async () => {
  try {
    await User.deleteMany({ username: { $ne: "test" } });
    await Post.deleteMany({});
    await Comment.deleteMany({});
    await Follower.deleteMany({});
  } catch (error) {
    console.error("Error deleting documents:", error);
  }
};

module.exports = { injectData, checkCollectionEmpty, removeData };
