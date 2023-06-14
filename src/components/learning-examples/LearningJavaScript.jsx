
// Javascript Object example and basisc
const person = {
    name: "Yousuf",
    address: {

        line1: "10 downing street",
        city: "London",
        country: "UK"
    },
    profiles:['twitter','linkedin','instagram'],
    printProfile: () => {
        person.profiles.map(
            // (profile) => {
            //     console.log(profile)
            // }
            profile => console.log(profile) // if we have only one parameter this can be written like this.
            
        )
        console.log(person.profiles[0])
    }
}

export default function LearningJavaScript() {
    return (
        <>
        <div>{person.name}</div>
        <div>{person.address.line1}</div>
        <div>{person.address.city}</div>
        <div>{person.address.country}</div>
        <div>{person.profiles[0]}</div>
        <div>{ person.printProfile() }</div>
        </>
    )
}