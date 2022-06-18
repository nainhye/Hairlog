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