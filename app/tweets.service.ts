import { Injectable } from '@angular/core'

@Injectable()
export class TweetsService {
    getAllTweets() {
        return [
            {
                imageUrl: 'http://lorempixel.com/100/100/people?1',
                author: 'Windward',
                handle: 'windwardstudios',
                body: 'Looking for a better company reporting or docgen app?',
                isLiked: true,
                totalLikes: 1
            },
            {
                imageUrl: 'http://lorempixel.com/100/100/people?2',
                author: 'AngularJS News',
                handle: 'angularjs_news',
                body: 'Right Relevance: Influencers, Articles and Conversations',
                isLiked: true,
                totalLikes: 5
            },
            {
                imageUrl: 'http://lorempixel.com/100/100/people?3',
                author: 'UX & Bootstrap',
                handle: '3rdwave',
                body: '10 Reasons Why Web Projects Fail',
                isLiked: false,
                totalLikes: 0
            }
        ];
    }
}