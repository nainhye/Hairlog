/**
*@swagger
* /api/swagger/singleMulter:
*   post:
*     tags:
*     - Multer
*     summary: Single Multer
*     consumes:
*     - "multipart/form-data"
*     produces:
*     - "application/json"
*     requestBody:
*       content:
*         multipart/form-data:
*           schema:
*             type: object
*             properties:
*               Image:
*                 type: string
*                 format: base64
*           encoding:
*             profileImage:
*               contentType: image/png, image/jpeg
*     responses:
*       "200":
*         description: "successful operation"
*/