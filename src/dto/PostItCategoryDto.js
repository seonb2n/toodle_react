class PostItCategoryDto {
    postItCategoryClientId;
    title;

    constructor(data) {
        this.postItCategoryClientId = data.postItCategoryClientId;
        this.title = data.title;
    }
}

export default PostItCategoryDto;