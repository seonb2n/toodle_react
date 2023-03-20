class PostItCategoryDto {
    postItCategoryId;
    title;

    constructor(data) {
        this.postItCategoryId = data.postItCategoryId;
        this.title = data.title;
    }
}

export default PostItCategoryDto;