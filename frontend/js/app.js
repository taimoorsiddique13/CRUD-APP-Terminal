// API URL
const API_URL = "http://localhost:3000/entries"; // Adjust the URL based on your server configuration

// DOM Elements
const entriesList = document.getElementById("entries-list");
const editSection = document.getElementById("edit-section");
const editInput = document.getElementById("edit-input");
const editSaveBtn = document.getElementById("edit-save-btn");
const entryForm = document.getElementById("entry-form");
const entryInput = document.getElementById("entry-input");
let editingEntryId = null; // To track the entry being edited

// Fetch all entries and display them
const fetchEntries = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();

    entriesList.innerHTML = data
      .map(
        (entry) => `
      <li>
        ${entry.text}
        <button onclick="startEditEntry('${entry._id}', '${entry.text}')">Update</button>
        <button onclick="deleteEntry('${entry._id}')">Delete</button>
      </li>
    `
      )
      .join("");
  } catch (error) {
    console.error("Error fetching entries:", error);
  }
};

// Create a new entry
const addEntry = async (event) => {
  event.preventDefault(); // Prevent form submission from reloading the page
  const newEntryText = entryInput.value;

  if (newEntryText.trim() === "") return;

  try {
    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: newEntryText }),
    });

    entryInput.value = "";
    fetchEntries();
  } catch (error) {
    console.error("Error adding entry:", error);
  }
};

// Start editing an entry
const startEditEntry = (id, text) => {
  editingEntryId = id;
  editInput.value = text;
  editSection.style.display = "block"; // Show the edit section
};

// Save the edited entry
const saveEditEntry = async () => {
  const updatedText = editInput.value;

  if (!editingEntryId || updatedText.trim() === "") return;

  try {
    await fetch(`${API_URL}/${editingEntryId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: updatedText }),
    });

    editingEntryId = null;
    editSection.style.display = "none"; // Hide the edit section
    fetchEntries();
  } catch (error) {
    console.error("Error saving edited entry:", error);
  }
};

// Delete an entry
const deleteEntry = async (id) => {
  if (!confirm("Are you sure you want to delete this entry?")) return;

  try {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    fetchEntries();
  } catch (error) {
    console.error("Error deleting entry:", error);
  }
};

// Attach event listener for the Save button in the edit section
editSaveBtn.addEventListener("click", saveEditEntry);

// Attach event listener for the form submission
entryForm.addEventListener("submit", addEntry);

// Initial fetch of entries
fetchEntries();
