const Ui = require("swagger-ui-express")
const swaggereJsdoc = require("swagger-jsdoc")

const options = {
  swaggerDefinition: {
    openapi : "3.0.0",
    info: {
      version: "1.0.0",
      title: "Hairlog API",
      description:
        "API test for Hairlog",
    },
    servers: [
      {
        url: "http://localhost:3000", 
      },
    ], 
    security : [
      {
        ApiKeyAuth: []
      }
    ]
  },
  // swagger 설정한 파일 위치
  apis: [], 
}
const specs = swaggereJsdoc(options)

module.exports = { Ui, specs }