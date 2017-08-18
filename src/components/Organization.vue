<template>
    <tr>
        <td class="name">
            <div class="initials-box" v-bind:style="{ backgroundColor: initialsBgColor }">{{ initials }}</div>
            {{ name }}
        </td>
        <td></td>
        <td></td>
        <td class="location">{{ location }}</td>
    </tr>
</template>

<script>
export default {
    name: 'organization',
    props: ['name', 'location', 'initialsBgColor'],
    data() {
        return {
        }
    },

    computed: {
        initials() {
            // Bad copy&paste!
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
