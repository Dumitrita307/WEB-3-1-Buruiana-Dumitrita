
const students = [
    {
        id: 1,
        name: "Anabela Cristea",
        group: "SI-231",
        age: 19,
        specialty: "Securitate informațională",
        avatar: "https://i.pravatar.cc/150?img=47"
    },
    {
        id: 2,
        name: "Valentin Maximciuc",
        group: "DAW-221",
        age: 20,
        specialty: "Dezvoltarea aplicațiilor web",
        avatar: "https://i.pravatar.cc/150?img=12"
    },
    {
        id: 3,
        name: "Irina Ciobanu",
        group: "RC-241",
        age: 18,
        specialty: "Rețele de calculatoare",
        avatar: "https://i.pravatar.cc/150?img=44"
    },
    {
        id: 4,
        name: "Andrei Munteanu",
        group: "PR-211",
        age: 21,
        specialty: "Programare",
        avatar: "https://i.pravatar.cc/150?img=13"
    },
    {
        id: 5,
        name: "Paula Codruța",
        group: "TI-241",
        age: 18,
        specialty: "Programare client-side",
        avatar: "https://i.pravatar.cc/150?img=49"
    }
];

const studentForm = document.getElementById("studentForm");
const studentsList = document.getElementById("studentsList");
const studentCount = document.getElementById("studentCount");
const formMessage = document.getElementById("formMessage");

const avatarInput = document.getElementById("avatar");
const imageUpload = document.getElementById("imageUpload");
const imagePreview = document.getElementById("imagePreview");
const uploadText = document.getElementById("uploadText");

let selectedImage = null;
let previewUrl = null;

// Deschide alegerea fotografiei la apăsarea casetei
imageUpload.addEventListener("click", () => {
    avatarInput.click();
});

// Previzualizarea fotografiei alese
avatarInput.addEventListener("change", () => {
    const file = avatarInput.files[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
        formMessage.textContent = "Te rog să alegi un fișier imagine valid!";
        avatarInput.value = "";
        return;
    }

    selectedImage = file;

    if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
    }

    previewUrl = URL.createObjectURL(file);

    imagePreview.src = previewUrl;
    imagePreview.style.display = "block";
    uploadText.style.display = "none";

    formMessage.textContent = "";
});

// Afișarea studenților
function renderStudents() {
    studentsList.replaceChildren();

    studentCount.textContent = students.length;

    if (students.length === 0) {
        const message = document.createElement("p");
        message.className = "empty-message";
        message.textContent =
            "Nu există studenți în catalog. Adaugă un student nou!";

        studentsList.appendChild(message);
        return;
    }

    students.forEach(student => {
        const card = document.createElement("article");
        card.className = "student-card";

        const avatar = document.createElement("img");
        avatar.src = student.avatar;
        avatar.alt = "Fotografia lui " + student.name;

        const name = document.createElement("h3");
        name.textContent = student.name;

        const group = document.createElement("p");
        group.textContent = "Grupa: " + student.group;

        const age = document.createElement("p");
        age.textContent = "Vârsta: " + student.age + " ani";

        const specialty = document.createElement("p");
        specialty.textContent = "Specialitatea: " + student.specialty;

        const deleteButton = document.createElement("button");
        deleteButton.type = "button";
        deleteButton.className = "delete-button";
        deleteButton.textContent = "Șterge";

        deleteButton.addEventListener("click", () => {
            deleteStudent(student.id);
        });

        card.append(
            avatar,
            name,
            group,
            age,
            specialty,
            deleteButton
        );

        studentsList.appendChild(card);
    });
}

// Generarea următorului ID
function getNextId() {
    return students.reduce(
        (max, student) => Math.max(max, student.id),
        0
    ) + 1;
}

// Ștergerea unui student
function deleteStudent(id) {
    const index = students.findIndex(
        student => student.id === id
    );

    if (index !== -1) {
        const student = students[index];

        if (student.avatar.startsWith("blob:")) {
            URL.revokeObjectURL(student.avatar);
        }

        students.splice(index, 1);
        renderStudents();
    }
}

// Adăugarea unui student
studentForm.addEventListener("submit", event => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const group = document.getElementById("group").value.trim();
    const ageText = document.getElementById("age").value.trim();
    const age = Number(ageText);
    const specialty = document.getElementById("specialty").value.trim();

    if (!name || !group || !ageText || !specialty || !selectedImage) {
        formMessage.textContent =
            "Completează toate câmpurile și alege o fotografie!";
        return;
    }

    if (!Number.isInteger(age) || age < 14 || age > 100) {
        formMessage.textContent =
            "Vârsta trebuie să fie un număr întreg între 14 și 100!";
        return;
    }

    const avatar = URL.createObjectURL(selectedImage);

    students.push({
        id: getNextId(),
        name,
        group,
        age,
        specialty,
        avatar
    });

    renderStudents();

    studentForm.reset();
    selectedImage = null;

    if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
        previewUrl = null;
    }

    imagePreview.removeAttribute("src");
    imagePreview.style.display = "none";
    uploadText.style.display = "flex";

    formMessage.textContent =
        "Studentul a fost adăugat cu succes!";
});

// Resetarea formularului și a fotografiei
studentForm.addEventListener("reset", () => {
    selectedImage = null;

    if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
        previewUrl = null;
    }

    imagePreview.removeAttribute("src");
    imagePreview.style.display = "none";
    uploadText.style.display = "flex";

    formMessage.textContent = "";
});

// Setări Flexbox
const justifyContent = document.getElementById("justifyContent");
const alignItems = document.getElementById("alignItems");
const flexWrap = document.getElementById("flexWrap");
const gap = document.getElementById("gap");
const gapValue = document.getElementById("gapValue");

function updateFlexSettings() {
    studentsList.style.justifyContent = justifyContent.value;
    studentsList.style.alignItems = alignItems.value;
    studentsList.style.flexWrap = flexWrap.value;
    studentsList.style.gap = gap.value + "px";

    gapValue.textContent = gap.value;
}

justifyContent.addEventListener("change", updateFlexSettings);
alignItems.addEventListener("change", updateFlexSettings);
flexWrap.addEventListener("change", updateFlexSettings);
gap.addEventListener("input", updateFlexSettings);

// Resetarea setărilor Flexbox
document.getElementById("resetFlex").addEventListener("click", () => {
    justifyContent.value = "flex-start";
    alignItems.value = "stretch";
    flexWrap.value = "wrap";
    gap.value = 20;

    updateFlexSettings();
});

// Inițializare
renderStudents();
updateFlexSettings();
