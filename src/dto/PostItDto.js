import PostItCategoryDto from "./PostItCategoryDto";

class PostItDto {
    postItClientId;
    categoryDto;
    content;
    createdTime;
    isDone;

    constructor(data, categoryDtoData) {
        this.postItClientId = data.postItClientId;
        this.categoryDto = new PostItCategoryDto(categoryDtoData);
        this.content = data.content;
        this.createdTime = data.createdTime;
        this.isDone = data.isDone;
    }
}

export default PostItDto;