/**
*@swagger
*components:
*  schemas:
*    User:
*      required:
*      - cycle
*      - name
*      - sex
*      type: object
*      properties:
*        email:
*          type: string
*          example: nanakim@gmail.com
*        password:
*          type: string
*          example: 1234
*        name:
*          type: string
*          example: 나나김
*        sex:
*          type: string
*          example: m
*        cycle:
*          type: integer
*          example: 5
*  securitySchemes:
*    ApiKeyAuth:
*      type: apiKey
*      name: api_key
*      in: header
*/