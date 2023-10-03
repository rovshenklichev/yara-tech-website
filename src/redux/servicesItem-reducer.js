let img = "../images/1.jpg";

let initialState = {
    itemProductData: [
        {
            id: 1,
            imgSrc: "1.jpg",
            nameItem: "service 1",
            description: "Marine Upholstery: Complete Reupholster, Custom Upholstery"
        },
        {
            id: 2,
            imgSrc: "../../../images/2.jpg",
            nameItem: "service 2",
            description: "Structure or Woodwork"
        },
        {
            id: 3,
            imgSrc: "../../images/3.jpg",
            nameItem: "service 3",
            description: "Carpet Flooring: Installation"
        }
    ]
}

const servicesItemReducer = (state = initialState, action) => {
    switch (action.type) {

        default:
            return state;
    }
}

export default servicesItemReducer;