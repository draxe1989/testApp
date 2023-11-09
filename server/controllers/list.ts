const DB = [
    {
        id: 1,
        model: "Philips EP1000/00",
        price: "24 999 ₽",
        sizeType: 1,
        drinkCountType: 1,
    }, {
        id: 2,
        model: "REDMOND RCM-1517",
        price: "24 999 ₽",
        sizeType: 1,
        drinkCountType: 2,
    }, {
        id: 3,
        model: "MAUNFELD MF-A7021",
        price: "24 999 ₽",
        sizeType: 1,
        drinkCountType: 3,
    }, {
        id: 4,
        model: "Philips EP1221/20",
        price: "24 999 ₽",
        sizeType: 2,
        drinkCountType: 1,
    }, {
        id: 5,
        model: "Philips EP1224/00",
        price: "24 999 ₽",
        sizeType: 2,
        drinkCountType: 2,
    }, {
        id: 6,
        model: "Delonghi ECAM 22.112",
        price: "24 999 ₽",
        sizeType: 2,
        drinkCountType: 3,
    },
    {
        id: 7,
        model: "Philips EP1000/00",
        price: "24 999 ₽",
        sizeType: 1,
        drinkCountType: 1,
    }, {
        id: 8,
        model: "Philips EP1000/00",
        price: "24 999 ₽",
        sizeType: 1,
        drinkCountType: 2,
    }, {
        id: 9,
        model: "Philips EP1000/00",
        price: "24 999 ₽",
        sizeType: 1,
        drinkCountType: 3,
    }, {
        id: 10,
        model: "Philips EP1000/00",
        price: "24 999 ₽",
        sizeType: 2,
        drinkCountType: 1,
    }, {
        id: 11,
        model: "Philips EP1000/00",
        price: "24 999 ₽",
        sizeType: 2,
        drinkCountType: 2,
    }, {
        id: 12,
        model: "Philips EP1000/00",
        price: "24 999 ₽",
        sizeType: 2,
        drinkCountType: 3,
    },
]


class List {
    async get(req: any, res: any) {
        try {

            const size = req.query?.size && !Number.isNaN(Number(req.query?.size)) ? Number(req.query.size) : null
            const drinkCount = req.query?.drinkCount && !Number.isNaN(Number(req.query?.drinkCount)) ? Number(req.query.drinkCount) : null

            res.json(DB.filter((item: any) => {
                const relevantSize = item.sizeType == size || !size
                const relevantdrinkCount = item.drinkCountType === drinkCount || !drinkCount
                return relevantdrinkCount && relevantSize
            }))


        } catch (e) {
            res.status(400)
        }
    }
}

export default new List()