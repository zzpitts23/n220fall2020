class VendingMachineItem {
  constructor(name, stock) {
    this.name = name;
    this.stock = stock;
  }

  removeStock() {
    if (this.stock == "N/A") {
      return;
    }

    if (this.stock === 1) {
      this.stock = "N/A";
    } else {
      this.stock--;
    }
  }
}

class VendingMachine {
  constructor(items) {
    this.items = items;
  }

  render() {
    var htmlString = "";

    this.items.forEach((item, index) => {
      htmlString += `<div class="px-4">
          <div>In Stock: ${item.stock}</div>
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
            onclick="removeStock(${index})"
          >
            Buy
            <span class="text-black">${item.name}</span>
          </button>
        </div>
      `;
    });

    document.getElementById("vendingStock").innerHTML = htmlString;
  }
}

function removeStock(index) {
  vendingMachine.items[index].removeStock();
  vendingMachine.render();
}

var items = [
  new VendingMachineItem("Snickers", 10),
  new VendingMachineItem("Twix", 7),
  new VendingMachineItem("Lays Chips", 5),
  new VendingMachineItem("Skittles", 3),
  new VendingMachineItem("Hubba Bubba", 9),
  new VendingMachineItem("Sour Patch Kids", 5),
];

var vendingMachine = new VendingMachine(items);
vendingMachine.render();
