class Post {
    private author: string /* quando vc encapsula, não se pode acessar */
    private text: string
    private likes: number = 0
  
    constructor(
      author: string, 
      text: string
    ){
      this.author = author
      this.text = text
    }
    