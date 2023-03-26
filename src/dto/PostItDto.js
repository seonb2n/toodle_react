import PostItCategoryDto from "./PostItCategoryDto";

class PostItDto {
    postItId;
    categoryDto;
    content;
    createdTime;
    isDone;

    constructor(data) {
        this.postItId = data.postItId;
        this.categoryDto =
            new PostItCategoryDto(data.categoryDto.postItCategoryId, data.categoryDto.title);
        this.content = data.content;
        this.createdTime = data.createdTime;
        this.isDone = data.isDone;
    }
}

export default PostItDto;