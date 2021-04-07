const mongoose = require('mongoose');
const schema = mongoose.Schema;

const ProfileSchema = schema({
    username: { type: String, required: true }
});

const Profile = module.exports = mongoose.model("Profile", ProfileSchema);

module.exports.addProfile = async (profile) => {
    console.log('Adding profile...');
    let addedProfile = await Profile.create(profile);
    return addedProfile;
}

module.exports.removeProfile = async (profile_id) => {
    console.log('Adding profile...');
    let removedProfile = await Profile.deleteOne(profile_id);
    return removedProfile;
}

module.exports.getProfiles = async () => {
    console.log('Getting all profiles...');
    let profiles = await Profile.find( { } );
    return profiles;
}