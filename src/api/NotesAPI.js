 class NotesAPI {

  constructor(apiUrl) {
    this.apiUrl = apiUrl;
  }

  async list() {
    return window.fetch(this.apiUrl, {
      method: "GET"
    }).then(response => response.json());
  }

  async add(content) {
    return window.fetch(this.apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: 0, content: content })
    });
  }

  async remove(noteId) {
    return window.fetch(`${this.apiUrl}/${noteId}`, {
      method: "DELETE"
    });
  }

}

export default NotesAPI;