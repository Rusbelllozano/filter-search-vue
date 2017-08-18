<template>
    <div>
        <div id="filter-search">
            <input type="text" v-model="searchText" />
        </div>
        <table class="info-table">
            <thead>
                People
            </thead>
            <tbody>
                <Person v-for="person in people"
                        key="person.id"
                        :name="person.name"
                        :title="person.title"
                        :organization="person.organization"
                        :location="person.location"
                />
            </tbody>
        </table>
        <table class="info-table">
            <thead>
                Organizations
            </thead>
            <tbody>
                <Organization v-for="org in organizations"
                        key="org.id"
                        :name="org.name"
                        :location="org.location"
                />
            </tbody>
        </table>
    </div>
</template>

<script>
import Person from './Person'
import Organization from './Organization'
import data from '../../data.json'

export default {
    name: 'search',
    components: {
        Person,
        Organization
    },
    data() {
        return {
            searchText: '',
            people: {},
            organizations: {},
            personCollection: this.retrieveJSON().map((obj) => {
                return this.toPerson(obj)
            }),
            organizationCollection: this.retrieveJSON().map((obj) => {
                return this.toOrganization(obj)
            }),
            filterFields: {
                person: ['name', 'title', 'location'],
                organization: ['name', 'location']
            }
        }
    },

    mounted() {
        this.people = this.personCollection
        this.organizations = this.organizationCollection
    },

    watch: {
        searchText(val) {
            // TODO Add debounce
            // This is supposed to be calling an API
            this.people = this.searchByText(this.personCollection, val, this.filterFields.person)
            this.organizations = this.searchByText(this.organizationCollection, val, this.filterFields.organization)
        }
    },

    methods: {
        retrieveJSON() {
            return data
        },
        toPerson(obj) {
            return {
                name: obj.person_name,
                title: obj.person_title,
                organization: this.toOrganization(obj),
                id: obj.person_id,
                location: obj.location
            }
        },
        toOrganization(obj) {
            return {
                id: obj.organization_id,
                name: obj.organization_name,
                location: obj.location
            }
        },
        searchByText(collection, text, fields) {
            const txt = text.toLowerCase()
            return collection.filter((member) => {
                for (const field of fields) {
                    if (member[field].toLowerCase().indexOf(txt) > -1) {
                        return true
                    }
                }
                return false
            })
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.info-table tr {
    border: 0;
}

#filter-search {
    left: 20px;
    input {
        height: 22px;
        width: 160px;
        font-size: 16px;
        font-weight: bold;
    }
}

.info-table {
    width: 100%;
    border-collapse: collapse;

    td {
        height: 55px;
        border-width: 0px 0px 1px 0px;
        border-style: solid;
        border-color: #ddd;
        padding: 0;
    }
    thead {
        text-align: left;
        width: 120px;
        display: block;
        margin-bottom: 10px;
        color: grey;
    }

    td.name {
        text-align: left;
        font-weight: bold;
        div.initials-box {
            width: 32px;
            height: 32px;
            margin-right: 8px;
            display: inline-flex;
            color: #fff;
            align-items: center;
            justify-content: center;
        }
    }

    td.title {

    }

    td.organization-name {
        text-align: center;
    }

    td.location {
        text-align: right;
    }

    margin-bottom: 30px;
}

h1, h2 {
    font-weight: normal;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
