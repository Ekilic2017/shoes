//fiyat ve indirim oranını al
//indirim varsa asıl fiyattan indirim kadar çıkart
//indirim yoksa asıl fiyatı döndür

export default (price: number, discount: number = 0) => {
    if (discount) {
      return (price * (100 - discount)) / 100;
    } else {
      return price;
    }
  };