const Entry = require("../models/entryModel"); // Assuming you have a MongoDB model

// Get all entries
const getEntries = async (req, res) => {
  try {
    const entries = await Entry.find(); // Fetch all entries from MongoDB
    res.status(200).json(entries);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch entries", error });
  }
};

// Add a new entry
const addEntry = async (req, res) => {
  const { text } = req.body;
  if (!text) {
    return res.status(400).json({ message: "Text is required" });
  }

  try {
    const newEntry = new Entry({ text });
    await newEntry.save();
    res.status(201).json(newEntry);
  } catch (error) {
    res.status(500).json({ message: "Failed to add entry", error });
  }
};

// Update an entry
const updateEntry = async (req, res) => {
  const { id } = req.params;
  const { text } = req.body;

  try {
    const updatedEntry = await Entry.findByIdAndUpdate(
      id,
      { text },
      { new: true }
    );

    if (!updatedEntry) {
      return res.status(404).json({ message: "Entry not found" });
    }

    res.status(200).json(updatedEntry);
  } catch (error) {
    res.status(500).json({ message: "Failed to update entry", error });
  }
};

// Delete an entry
const deleteEntry = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedEntry = await Entry.findByIdAndDelete(id);
    if (!deletedEntry) {
      return res.status(404).json({ message: "Entry not found" });
    }

    res.status(204).send(); // No content
  } catch (error) {
    res.status(500).json({ message: "Failed to delete entry", error });
  }
};

module.exports = { getEntries, addEntry, updateEntry, deleteEntry };
