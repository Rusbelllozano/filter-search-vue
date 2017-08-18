<template>
    <tr>
        <td class="name">
            <div class="initials-box" v-bind:style="{ backgroundColor: backgroundColor }">{{ initials }}</div>
            {{ name }}
        </td>
        <td class="title">{{ title }}</td>
        <td class="organization-name">{{ organization.name }}</td>
        <td class="location">{{ location }}</td>
    </tr>
</template>

<script>
import _ from 'lodash'

export default {
    name: 'person',
    props: ['name', 'title', 'organization', 'location'],
    data() {
        return {
            backgroundColor: _.sample(['green', 'red', 'blue'])
        }
    },
    computed: {
        initials() {
            const firstInitial = this.name[0]
            let lastInitial = ''
            for (let i = this.name.length; i > 0; i--) {
                if (this.name[i] === ' ') {
                    lastInitial = this.name[i + 1]
                    break
                }
            }
            return firstInitial + lastInitial
        }
    }
}
</script>
