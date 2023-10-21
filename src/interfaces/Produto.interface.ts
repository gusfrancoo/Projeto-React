interface Produto {
    length: number;
    id: number;
    name: string;
    price: number;
    tipo: string;
    descricao?: string;
    imageSrc: string;
    handleRemove?: any|null;
  }
  
  export default Produto;