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
*    Record:
*      required:
*      - date
*      - grade
*      type: object
*      properties:
*        Image:
*          type: string
*          format: base64
*        date:
*          type: string
*          example: 2022-07-29
*        cost:
*          type: integer
*          example: 15000
*        time:
*          type: integer
*          example: 60
*        etc:
*          type: string
*          example: this is test for API
*        grade:
*          type: integer
*          example: 5
*    Designer:
*      required:
*      - designer
*      type: object
*      properties:
*        designer:
*          type: string
*          example: 미라클
*        salon:
*          type: string
*          example: 에코노베이션
*  securitySchemes:
*    ApiKeyAuth:
*      type: apiKey
*      name: api_key
*      in: header
*/