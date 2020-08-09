import * as fs from 'fs'
import Post from "Post.ts"

export function readDatabase(): any {
  try {
    const fileData: string = fs.readFileSync('./data.json').toString()
    return JSON.parse(fileData)
  } catch (error) {
    console.log("Erro ao ler a base de dados: " + error.message)
    return []
  }
}

export function writeToDatabase(data: any): void {
  try {
    const dataAsString: string = JSON.stringify(data, null, 2)
    fs.writeFileSync('./data.json', dataAsString)
  } catch (error) {
    console.log("Erro ao salvar os dados: " + error.message)
  }
};

export defaut class Post {
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
  public getAuthor = () => this.author  /* os gets acessam os privados dento da classe */
  public getText = () => this.text
  public getLikes = () => this.likes

  public like(): void {  /* aqui eu consigo manipular os valores */
    this.likes ++
  }
}

const myPost: Post = new Post (
  "Hermione",
  "Eu já li esse livro"
)

const newPost: Post = new Post (
  "Rony",
  "São aranhas???"
)
/* myPost.likes = 1  ////se ele estivesse publico, conseguiria manipular */

myPost.like()
console.log(myPost.getAuthor()) /* use o parenteses para chamar o get */