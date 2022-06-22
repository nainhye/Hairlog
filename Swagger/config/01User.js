/**
*@swagger
*paths:
*   /api/swagger/join:
*       get:
*           tags:
*           - Join
*           summary: 회원가입 페이지
*           responses:
*               "200":
*                   description: "successful operation"
*       post:
*           tags:
*           - Join
*           summary: 회원가입 요청
*           requestBody:
*               content:
*                   application/json:
*                       schema:
*                           $ref: '#/components/schemas/User'
*               required: true
*           responses:
*               "201":
*                   description: Created
*@swagger
*paths:
*   /api/swagger/authenticate:
*       get:
*           tags:
*           - Login
*           summary: 로그인 페이지
*           responses:
*               "200":
*                   description: "successful operation"
*       post:
*           tags:
*           - Login
*           summary: 로그인 요청
*           requestBody:
*               content:
*                   application/json:
*                       schema:
*                           $ref: '#/components/schemas/User'
*                       example : { "email" : "nanakim@gmail.com", "password" : "1234" }
*               required: true
*           responses:
*               "201":
*                   description: "successful operation"
*/