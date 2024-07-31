const os = require('os')

const interfaces = os.networkInterfaces()
let macAddress = null

for (const key in interfaces) {
  for (const details of interfaces[key]) {
    if (details.mac && !details.internal) {
      macAddress = details.mac;
      break
    }
  }
  if (macAddress) 
    break
}

console.log('MAC Address:', macAddress)