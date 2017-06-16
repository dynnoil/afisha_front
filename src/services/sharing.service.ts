import { Injectable } from '@angular/core';
import { SocialSharing } from '@ionic-native/social-sharing';

@Injectable()
export class SharingService {
    private socialNetworks: string[] = [
        'twitter',
        'instagram',
        'telegram'
    ];

    constructor(private socialSharing: SocialSharing) { }

    getAvailableSocialNetworks(): string[] {
        let availableSocialNetworks: string[];
        this.socialNetworks.forEach(socialNetwork => {
            this.socialSharing.canShareVia(socialNetwork).then(() => {
                console.log("Can share via ", socialNetwork);
                availableSocialNetworks.push(socialNetwork);
            }).catch(() => {
                console.log("Can't share via ", socialNetwork);
            });
        });
        return availableSocialNetworks;
    }

    share(socialNetwork: string, message: string): void {
        this.socialSharing.shareVia(socialNetwork, message).then(() => {
            console.log("Shared!");
        }).catch(() => {
            console.log("Error while sharing!");
        });
    }
}