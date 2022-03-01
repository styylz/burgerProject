import axios from 'axios';

const ImageService = new (class ImageService {
  constructor() {
    this.requester = axios.create({
      baseURL: 'http://localhost:5000/api/images',
      headers: { 'Content-Type': 'application/json' },
    });
  }

  async getImages() {
    const { data } = await this.requester.get('/');
    return data.images;
  }

  async uploadImages(files) {
    const formData = new FormData();
    for (let i = 0; i < files.length; i += 1) {
      formData.append('files', files[i]);
    }

    const { data } = await this.requester.post('/', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return data.images;
  }

  async deleteImage(id) {
    await this.requester.delete(`/${id}`, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  }
})();

export default ImageService;
