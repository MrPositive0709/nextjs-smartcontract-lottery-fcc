const contractAddresses = {
    // Other network addresses...
    31337: ["0x5FbDB2315678afecb367f032d93F642f64180aa3"], // Example address for localhost (replace with your actual address)
    11155111: ["0x587D950c7D296c3563DFdc915333d77614f7c126"], // Contract address for Sepolia
}

const abi = require("./abi.json")

module.exports = {
    contractAddresses,
    abi,
}
