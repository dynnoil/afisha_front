import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const events = [
            {
                id: 1,
                name: "Поход в горы",
                description: "Как начать ходить в горы если нет опыта? Отвечу просто - нужно просто начать ходить в горы! Да, именно так просто. Даже не имея серьезного туристического опыта очень даже возможно взять и сходить в свой первый горный поход! Секрет лишь в том, что начинать нужно с несложных, но при этом очень красивых маршрутов и шаг за шагом прокачивать свой туристический опыт. На этой странице я попытался собрать те из пройденных мной туристических походов в горы, которые не требуют серьёзного опыта и вполне доступны любому физически здоровому человеку.",
                image: "https://yandex.ru/images/today?size=1920x1080",
                images: [
                    "https://hdwallpapers8k.com/wp-content/uploads/moonlit_night_2-wallpaper-1920x1080-1600x900.jpg",
                    "https://clapsjoker.files.wordpress.com/2011/12/manzarawindowstemacom.jpg",
                    "http://www.hdwallpaperspulse.com/wp-content/uploads/2013/08/15/New-York-City-Bridge-HD-Wallpapers.jpg"
                ],
                link: "https://angular.io/guide/pipes",
                startDate: new Date("February 4, 2016 10:00:00"),
                endDate: new Date("February 5, 2016 23:00:00"),
                place: {
                    id: 0,
                    title: 'Garage',
                    latitude: 59.21806649999999,
                    longitude: 39.8978052
                }
            },
            {
                id: 2,
                name: "Drinking Booze",
                description: "something",
                image: "https://www.kr-gazeta.ru/upload/medialibrary/934/глинтвейн.jpg",
                images: [
                    "https://hdwallpapers8k.com/wp-content/uploads/moonlit_night_2-wallpaper-1920x1080-1600x900.jpg",
                    "https://clapsjoker.files.wordpress.com/2011/12/manzarawindowstemacom.jpg",
                    "http://www.hdwallpaperspulse.com/wp-content/uploads/2013/08/15/New-York-City-Bridge-HD-Wallpapers.jpg"
                ],
                link: "https://angular.io/guide/pipes",
                startDate: new Date("February 4, 2016 10:13:00"),
                endDate: new Date("February 4, 2016 10:13:00"),
                place: {
                    id: 0,
                    title: 'Garage',
                    latitude: 59.21806649999999,
                    longitude: 39.8978052
                }
            },
            {
                id: 3,
                name: "Вечер в Бардаке",
                description: "Проведи незабываемый вечер",
                image: "http://mtdata.ru/u3/photoF82A/20851185804-0/original.jpg",
                images: [
                    "https://hdwallpapers8k.com/wp-content/uploads/moonlit_night_2-wallpaper-1920x1080-1600x900.jpg",
                    "https://clapsjoker.files.wordpress.com/2011/12/manzarawindowstemacom.jpg",
                    "http://www.hdwallpaperspulse.com/wp-content/uploads/2013/08/15/New-York-City-Bridge-HD-Wallpapers.jpg"
                ],
                link: "https://angular.io/guide/pipes",
                startDate: new Date("February 4, 2016 10:13:00"),
                endDate: new Date("February 4, 2016 10:13:00"),
                place: {
                    id: 0,
                    title: 'Garage',
                    latitude: 59.21806649999999,
                    longitude: 39.8978052
                }
            }
        ];
        return { events };
    }
}