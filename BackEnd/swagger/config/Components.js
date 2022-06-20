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
*    Record_cut:
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
*        category:
*          type: string
*          example: cut
*        CutName:
*          type: string
*          example: cutName
*        CutLength:
*          type: integer
*          example: 24
*        designerName:
*          type: string
*          example: 미라클
*        etc:
*          type: string
*          example: this is test for API
*        grade:
*          type: integer
*          example: 5
*    Record_perm:
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
*        category:
*          type: string
*          example: perm
*        permName:
*          type: string
*          example: permName
*        permTime:
*          type: integer
*          example: 2
*        permHurt:
*          type: integer
*          example: 1 
*        designerName:
*          type: string
*          example: 미라클
*        etc:
*          type: string
*          example: this is test for API
*        grade:
*          type: integer
*          example: 5
*    Record_dyeing:
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
*          example: 50
*        category:
*          type: string
*          example: dyeing
*        dyeingColor:
*          type: string
*          example: blue
*        dyeinDecolorization:
*          type: integer
*          example: 2
*        dyeingTime:
*          type: integer
*          example: 3
*        dyeingHurt:
*          type: integer
*          example: 1 
*        designerName:
*          type: string
*          example: 미라클
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