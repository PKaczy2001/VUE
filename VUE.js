const { createApp } = Vue;

const config = {
    data() {
      return {
        Ueberschrift: "",  // Create a data property for binding the input value
        Liste: "",
        notes: this.loadNotes(),
      };
    },
  methods: {
    saveNotes(){
      localStorage.setItem("notes", JSON.stringify(this.notes)); // Save the notes to localStorage
    },
    loadNotes(){
      const storedNotes = localStorage.getItem("notes");
      return storedNotes ? JSON.parse(storedNotes) : null;
  },
    onClick() {
      if(this.Ueberschrift.trim() !=="" && this.Liste.trim() !==""){
      this.notes.push({
        id: Date.now(),  // brauchde ich damit beim delete die richtige note gelöscht wird
        title: this.Ueberschrift,
        text: this.Liste
      });
    }
    else{
      alert("Bitte eine Überschrift und Notiz eingeben!");
    }
    this.saveNotes();
    },
    deleteNote(id){ // Receive the index of the note to delete
      this.notes = this.notes.filter(note => note.id !== id) ; // Remove note at the given index
      this.saveNotes();
    },

    deleteEverything(){
      this.notes = []; // Remove all notes
      this.saveNotes();
    },
}
};

const app = createApp(config);
app.mount("#app");

