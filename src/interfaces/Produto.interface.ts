interface Produto {
    name: string;
    price: number;
    // tipo: string;
    descricao?: string;
    imageSrc: string;
    // nao deve ser enviado na rota
    handleRemove?: any|null;
  }
  
  export default Produto;