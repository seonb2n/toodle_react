import PostItCategoryDto from "./PostItCategoryDto";

class PostItDto {
    postItId;
    categoryDto;
    content;
    createdTime;
    isDone;

    constructor(data, categoryDtoData) {
        this.postItId = data.postItId;
        this.categoryDto = new PostItCategoryDto(categoryDtoData);
        this.content = data.content;
        this.createdTime = data.createdTime;
        this.isDone = data.isDone;
    }
}

export default PostItDto;