export class Blog{

    descr = this.blogTitle + ' ' + this.blogDescription;

    constructor(public blogTitle:string, public blogDescription:string){
    }
}
