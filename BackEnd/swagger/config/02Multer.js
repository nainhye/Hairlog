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
*
* /api/swagger/singleRecord:
*   post:
*     tags:
*     - Record
*     summary: Single Record 요청
*     consumes:
*     - "multipart/form-data"
*     produces:
*     - "application/json"
*     requestBody:
*       content:
*         multipart/form-data:
*           schema:
*               $ref: '#/components/schemas/Record'
*           encoding:
*             profileImage:
*               contentType: image/png, image/jpeg
*     responses:
*       "200":
*         description: "successful operation"
*/