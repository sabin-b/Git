/**
 * commands
 *
 * 1) git rm --cached index.js - it will bring staged files (from staging area) to unstaging area ( not tracking files)
 *
 * 2) git restore --staged filename or period (.) - for example: already file.js is in local repositary,now we have made some changes right now, files is in staging,  now if we thought discard the changes which you made right now, that's time we can use this
 *
 * 3) git restore filename or or period (.) - now make sure file not in staging area, but that file already in local repo, you made some changes on the , you thought remove that changes , you can done with this command
 *
 * 4) git reset commit-id - if previoulsy we had one commit that is initial commit, now again we made another commit, suppose if i thought roll back to initail commit, i can go with this comment
 * options:
 * --soft - by default, command will work in soft mode, make sure soft mode when we do new files and changes will be exists, only head will be initial commit, now if we push, unitill then initial commit go to git repo
 * --hard - when we use this all of the files, folder and changes will be deleted, also head will be move to previous commit
 * 
 * 5) git revert commit-id - if we thought remove 
 */
