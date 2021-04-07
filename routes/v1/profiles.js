const express = require('express');
const router = express.Router();
const Profile = require('../../models/Profile');

router.get('/', async (req, res) => {
    let profiles = await Profile.getProfiles();
    // No profiles
    if (profiles.length == 0) {
        console.log('No profiles found')
        res.json({ success: 0, message: 'No profiles found' });
    } else {
        console.log('Found profiles: ' + profiles);
        res.json({ success: 1, message: 'Profiles retreived', payload: profiles });
    }
});

router.delete('/:id', async (req, res) => {
    let wasDeleted = await Profile.removeProfile(req.params.id);
    console.log(wasDeleted);
});



module.exports = router;