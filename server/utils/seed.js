Profession = require("../models/professionModel.js");
const Training = require("../models/trainingModel.js");

module.exports = { addTrainingArr }

async function addTrainingArr( arr = defaultTraining) {
    try {
        const result = await Training.insertMany(arr);
        return result;
    } catch (error) {
        console.log("failed to add 'training' data", error);
    }
}

const defaultTraining = [
    {
        "name": "תואר ראשון במדעי המחשב",
        "kind": "ba",
        "durationMonths": 36,
        "highSchoolGraduate": true,
        "averageBagrutScore": 85,
        "psychometricScore": 680,
        "costNIS": 70000
    },
    {
        "name": "תואר שני במדעי הנתונים",
        "kind": "ma",
        "durationMonths": 24,
        "highSchoolGraduate": true,
        "averageBagrutScore": 90,
        "psychometricScore": 720,
        "costNIS": 50000
    },
    {
        "name": "דוקטורט בפיזיקה",
        "kind": "phd",
        "durationMonths": 48,
        "highSchoolGraduate": true,
        "averageBagrutScore": 95,
        "psychometricScore": 750,
        "costNIS": 100000
    },
    {
        "name": "תעודת בוגר בפיתוח אינטרנט",
        "kind": "certificate",
        "durationMonths": 6,
        "highSchoolGraduate": false,
        "averageBagrutScore": null,
        "psychometricScore": null,
        "costNIS": 15000
    },
    {
        "name": "קורס הכשרת מורים ליוגה",
        "kind": "other",
        "durationMonths": 12,
        "highSchoolGraduate": false,
        "averageBagrutScore": null,
        "psychometricScore": null,
        "costNIS": 20000
    },
    {
        "name": "תואר שני במנהל עסקים (MBA)",
        "kind": "ma",
        "durationMonths": 18,
        "highSchoolGraduate": true,
        "averageBagrutScore": 80,
        "psychometricScore": 650,
        "costNIS": 60000
    },
    {
        "name": "תואר ראשון בהנדסת חשמל",
        "kind": "ba",
        "durationMonths": 42,
        "highSchoolGraduate": true,
        "averageBagrutScore": 88,
        "psychometricScore": 700,
        "costNIS": 80000
    },
    {
        "name": "תעודת בוגר בעיצוב גרפי",
        "kind": "certificate",
        "durationMonths": 3,
        "highSchoolGraduate": false,
        "averageBagrutScore": null,
        "psychometricScore": null,
        "costNIS": 8000
    },
    {
        "name": "תואר שני בפסיכולוגיה",
        "kind": "ma",
        "durationMonths": 24,
        "highSchoolGraduate": true,
        "averageBagrutScore": 82,
        "psychometricScore": 660,
        "costNIS": 45000
    },
    {
        "name": "דיפלומה בבישול",
        "kind": "other",
        "durationMonths": 10,
        "highSchoolGraduate": false,
        "averageBagrutScore": null,
        "psychometricScore": null,
        "costNIS": 18000
    }
]

const defaultProfessions = [
    {
        name: "מהנדס תוכנה",
        description: "מתכנן, מפתח ומתחזק תוכנות מחשב.",
        categories: ["טכנולוגיה", "הנדסה"],
        tags: ["פיתוח", "קוד", "אלגוריתמים"],
        averageSalary: 30000,
        averageWeeklyHours: 45,
        requiredTrainingIds: ['6762b766d80811fa31282acf'],
        abilities: [
            { ability: "פתרון בעיות", description: "יכולת למצוא פתרונות יצירתיים לבעיות מורכבות" },
            { ability: "חשיבה אנליטית", description: "יכולת לפרק בעיות למרכיבים קטנים יותר" }
        ],
        skills: [
            { skill: "שפות תכנות", description: "שליטה בשפות כמו Java, Python, C++" },
            { skill: "עבודה בצוות", description: "יכולת שיתוף פעולה עם אנשי מקצוע אחרים" }
        ],
        personality: [
            { personality: "סקרנות", description: "רצון ללמוד ולגלות דברים חדשים בתחום הטכנולוגיה" },
            { personality: "התמדה", description: "יכולת להתמודד עם אתגרים ולהתמיד במשימות" }
        ]
    },
    {
        name: "רופא",
        description: "מאבחן, מטפל ומטפל במחלות.",
        categories: ["רפואה", "בריאות"],
        tags: ["רפואה", "טיפול", "בריאות"],
        averageSalary: 45000,
        averageWeeklyHours: 50,
        requiredTrainingIds: [],
        abilities: [
            { ability: "אמפתיה", description: "יכולת להבין ולהתחבר לרגשות של המטופלים" },
            { ability: "עבודה בצוות", description: "יכולת שיתוף פעולה עם צוות רפואי" }
        ],
        skills: [
            { skill: "אבחון מחלות", description: "יכולת לזהות סימפטומים ולהציב אבחנות מדויקות" },
            { skill: "טיפול רפואי", description: "ביצוע הליכים רפואיים שונים" }
        ],
        personality: [
            { personality: "אחריות", description: "תחושת אחריות גבוהה לבריאות המטופלים" },
            { personality: "סבלנות", description: "יכולת להתמודד עם מצבים מלחיצים" }
        ]
    },
    {
        name: "מורה",
        description: "מלמד ומחנך תלמידים.",
        categories: ["חינוך", "השכלה"],
        tags: ["לימוד", "הוראה", "חינוך"],
        averageSalary: 25000,
        averageWeeklyHours: 40,
        requiredTrainingIds: [],
        abilities: [
            { ability: "תקשורת בין-אישית", description: "יכולת להעביר מידע בצורה ברורה ומעניינת" },
            { ability: "סבלנות", description: "יכולת להתמודד עם תלמידים בעלי צרכים שונים" }
        ],
        skills: [
            { skill: "תכנון שיעורים", description: "יכולת לתכנן ולערוך שיעורים מעניינים ויעילים" },
            { skill: "הערכה", description: "יכולת להעריך את הישגי התלמידים" }
        ],
        personality: [
            { personality: "אהבת ילדים", description: "אהבה אמיתית לילדים ולעבודתם" },
            { personality: "יצירתיות", description: "יכולת למצוא דרכים חדשות ויצירתיות להעברת ידע" }
        ]
    },
    {
        name: "עורך דין",
        description: "ייצוג משפטי, ייעוץ משפטי וניהול תיקים משפטיים.",
        categories: ["משפטים", "עסקים"],
        tags: ["משפט", "דיני", "ייצוג"],
        averageSalary: 40000,
        averageWeeklyHours: 55,
        requiredTrainingIds: [],
        abilities: [
            { ability: "ניתוח משפטי", description: "יכולת לנתח חוקים ופרשנויות משפטיות" },
            { ability: "כתיבה משפטית", description: "יכולת לנסח מסמכים משפטיים בצורה ברורה ומדויקת" }
        ],
        skills: [
            { skill: "מיומנויות משא ומתן", description: "יכולת לנהל משא ומתן ולהגיע להסכמות" },
            { skill: "מחקר משפטי", description: "יכולת לאתר ולבחון מקורות משפטיים" }
        ],
        personality: [
            { personality: "אחריות", description: "תחושת אחריות גבוהה כלפי לקוחות ולקוחותיהם" },
            { personality: "דייקנות", description: "יכולת לעבוד בדייקנות ובמסירות" }
        ]
    },
    {
        name: "מעצב גרפי",
        description: "יוצר חומרים גרפיים כגון לוגואים, שילוט, ועיצובים דיגיטליים.",
        categories: ["אמנות", "עיצוב"],
        tags: ["עיצוב", "גרפיקה", "דיגיטל"],
        averageSalary: 20000,
        averageWeeklyHours: 40,
        requiredTrainingIds: ["6762b767d80811fa31282ad6"],
        abilities: [
            { ability: "יצירתיות", description: "יכולת לחשוב באופן מקורי וחדשני" },
            { ability: "חוש אסתטי", description: "הבנה עמוקה באסתטיקה ויופי" }
        ],
        skills: [
            { skill: "תוכנות גרפיקה", description: "שליטה בתוכנות כמו Adobe Photoshop, Illustrator" },
            { skill: "עבודה בצוות", description: "יכולת לשתף פעולה עם לקוחות וצוותים" }
        ],
        personality: [
            { personality: "סבלנות", description: "יכולת לעבוד על פרויקטים לפרק זמן ממושך" },
            { personality: "גמישות", description: "יכולת להתאים את העיצובים לדרישות המשתמשים" }
        ]
    },
    {
        name: "פיזיותרפיסט",
        description: "מטפל בתפקוד הגוף באמצעות תרגילים ותנועה.",
        categories: ["בריאות", "רפואה"],
        tags: ["פיזיותרפיה", "שיקום", "תנועה"],
        averageSalary: 28000,
        averageWeeklyHours: 42,
        requiredTrainingIds: [],
        abilities: [
            { ability: "ידע אנטומי", description: "הבנה מעמיקה של מבנה הגוף ותפקודו" },
            { ability: "מגע טיפולי", description: "יכולת לבצע טכניקות מגע טיפוליות" }
        ],
        skills: [
            { skill: "תכנון תוכניות אימון", description: "יכולת לתכנן תוכניות אימון מותאמות אישית" },
            { skill: "הערכה פונקציונלית", description: "יכולת להעריך את תפקוד הגוף" }
        ],
        personality: [
            { personality: "סבלנות", description: "יכולת לעבוד עם מטופלים לאורך זמן" },
            { personality: "אמפתיה", description: "יכולת להתחבר לחוויות של המטופלים" }
        ]
    },
    {
        name: "שחקן",
        description: "מגלם דמויות על הבמה, בקולנוע או בטלוויזיה.",
        categories: ["אמנות", "בידור"],
        tags: "משחק, תיאטרון, קולנוע",
        averageSalary: 18000,
        averageWeeklyHours: 35,
        requiredTrainingIds: [],
        abilities: [
            { ability: "ביטוי רגשי", description: "יכולת להביע מגוון רחב של רגשות" },
            { ability: "אימפרוביזציה", description: "יכולת להגיב באופן ספונטני" }
        ],
        skills: [
            { skill: "משחק", description: "שליטה בטכניקות משחק שונות" },
            { skill: "עבודה מול מצלמה", description: "יכולת להופיע מול מצלמה" }
        ],
        personality: [
            { personality: "יצירתיות", description: "יכולת לחשוב באופן מקורי" },
            { personality: "ביטחון עצמי", description: "יכולת להתמודד עם קהל" }
        ]
    },
    {
        name: "עיתונאי",
        description: "אוסף, בוחן ומפרסם חדשות ומידע.",
        categories: ["תקשורת", "עיתונות"],
        tags: "כתבה, עריכה, תקשורת",
        averageSalary: 22000,
        averageWeeklyHours: 45,
        requiredTrainingIds: [],
        abilities: [
            { ability: "כתיבה עיתונאית", description: "יכולת לכתוב טקסטים ברורים ותמציתיים" },
            { ability: "ראיונות", description: "יכולת לראיין אנשים ולקבל מידע" }
        ],
        skills: [
            { skill: "מחקר", description: "יכולת לאסוף מידע ולנתח אותו" },
            { skill: "עבודה תחת לחץ", description: "יכולת לעמוד בלוחות זמנים קצרים" }
        ],
        personality: [
            { personality: "סקרנות", description: "רצון לדעת ולהבין את העולם" },
            { personality: "עקשנות", description: "יכולת להתעקש על האמת" }
        ]
    },
    {
        name: "מדריך טיולים",
        description: "מלווה קבוצות מטיילים ומספק מידע על אתרים ומסלולים.",
        categories: "תיירות",
        tags: "טיולים, תיירות, מדריך",
        averageSalary: 15000,
        averageWeeklyHours: 30,
        requiredTrainingIds: [],
        abilities: [
            { ability: "תקשורת בין-אישית", description: "יכולת להתחבר לקבוצה ולענות על שאלות" },
            { ability: "ידע היסטורי", description: "ידע על ההיסטוריה והתרבות של המקום" }
        ],
        skills: [
            { skill: "תכנון מסלולים", description: "יכולת לתכנן מסלולים בטוחים ומעניינים" },
            { skill: "ניווט", description: "יכולת לנווט בשטח" }
        ],
        personality: [
            { personality: "סבלנות", description: "יכולת להתמודד עם קבוצות מגוונות" },
            { personality: "אנרגטי", description: "יכולת לשמור על אנרגיה גבוהה במהלך הטיול" }
        ]
    }]

