/**
*@swagger
* /api/swagger/getRecord:
*   get:
*     tags:
*     - Record
*     summary: Single Recod 결과
*     responses:
*       "200":
*         description: "successful operation"
* /api/swagger/singleRecord/cut :
*   post:
*     tags:
*     - Record
*     summary: Cut Single Record 요청
*     consumes:
*     - "multipart/form-data"
*     produces:
*     - "application/json"
*     requestBody:
*       content:
*         multipart/form-data:
*           schema:
*               $ref: '#/components/schemas/Record_cut'
*           encoding:
*             profileImage:
*               contentType: image/png, image/jpeg
* /api/swagger/singleRecord/perm :
*   post:
*     tags:
*     - Record
*     summary: Perm Single Record 요청
*     consumes:
*     - "multipart/form-data"
*     produces:
*     - "application/json"
*     requestBody:
*       content:
*         multipart/form-data:
*           schema:
*               $ref: '#/components/schemas/Record_perm'
*           encoding:
*             profileImage:
*               contentType: image/png, image/jpeg
* /api/swagger/singleRecord/dyeing :
*   post:
*     tags:
*     - Record
*     summary: Dyeing Single Record 요청
*     consumes:
*     - "multipart/form-data"
*     produces:
*     - "application/json"
*     requestBody:
*       content:
*         multipart/form-data:
*           schema:
*               $ref: '#/components/schemas/Record_dyeing'
*           encoding:
*             profileImage:
*               contentType: image/png, image/jpeg
*     responses:
*       "200":
*         description: "successful operation"
*/