import PostItCategoryDto from "./PostItCategoryDto";

class PostItDto {
    postItId;
    postItCategoryDto;
    content;
    createdTime;
    isDone;

    constructor(data) {
        this.postItId = data.postItId;
        this.postItCategoryDto =
            new PostItCategoryDto(data.postItCategoryDto.postItCategoryId, data.postItCategoryDto.title);
        this.content = data.content;
        this.createdTime = data.createdTime;
        this.isDone = data.isDone;
    }
}

export default PostItDto;