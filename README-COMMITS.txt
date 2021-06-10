##############
DURING COMMITS
##############

Donot upload the node_modules folder into the repository with your commit.

This is done because the folder can be very heavy (several hundreds of Mb), and it would cause your pushes to be very long, and not up-to-date with your semver (semantic versioning).

If other users want to run your project locally, they will have to run npm i before ng serve. That's widely accepted as a standard.
