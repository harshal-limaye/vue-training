app.component('user-card', {
    props: {
        name: String,
        jobTitle: String,
        country: String
    },
    template: `
        <div @click="clicked" class="userInfo">
            <h1>{{title}} : {{name}}</h1>
            <p>{{job}} : {{jobTitle}}</p>
            <p>{{location}} : {{country}}</p>
        </div>
    `,
    data: () => {
        return {
            title: 'Full Name',
            job: 'Position',
            location: 'Location'
        }
    },
    methods: {
        clicked() {
            this.$emit('userSelected', this.name, this.country);
        }
    }
});