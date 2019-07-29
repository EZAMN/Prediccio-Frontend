//Arxiu de configuracio del server de backend
var config = {
  Config: JSON.stringify(process.env.NODE_ENV === 'production' ? {
    serverUrl: "http://localhost:5000"
  } : {
    serverUrl: "http://localhost:5000"
  })
}

export default config