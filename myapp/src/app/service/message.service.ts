import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class MessageService {
    private favorite = new Subject<any>();
    private removeFavorite = new Subject<null>();

    sendFavoriteItem() {
        this.favorite.next();
    }

    getFavoriteItem(): Observable<null> {
        return this.favorite.asObservable();
    }

    sendRemoveFavoriteItem() {
      this.removeFavorite.next();
    }

    getRemoveFavoriteItem() {
      return this.removeFavorite.asObservable();
    }
}

