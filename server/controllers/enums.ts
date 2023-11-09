class Enums {
    async sizes(req: any, res: any) {
        try {
            res.json([
                {
                    id: 1,
                    name: "Стандартный"
                }, {
                    id: 2,
                    name: "Увеличенный"
                },
            ])
        } catch (e) {
            res.status(400)
        }
    }

    async drinkCountes(req: any, res: any) {
        try {
            res.json([
                {
                    id: 1,
                    name: "6"
                }, {
                    id: 2,
                    name: "8"
                }, {
                    id: 3,
                    name: "12"
                },
            ])
        } catch (e) {
            res.status(400)
        }
    }
}

export default new Enums()