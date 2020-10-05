# [Beginners/BashScripting - Community Help Wiki](https://help.ubuntu.com/community/Beginners/BashScripting)

## Scripting

NOTE: The commands given in the scripting section are to be put into the text editor and not in the terminal unless instructed otherwise.

Bash is primarily a scripting language, so it would be a crime not to talk about scripting.
Let's dive straight in with a bash script.
More precisely the infamous "Hello World" script.
You can create a bash script by opening your favorite text editor to edit your script and then saving it.
(Typically the .sh file extension is used for your reference, but it is not necessary.
In our examples, we will be using the .sh extension).

```sh
#!/bin/bash

echo "Hello World"
```

The first line of the script just defines which interpreter to use.
NOTE: There is no leading whitespace before #!/bin/bash.
That's it, simple as that.
To run a bash script you first have to have the correct file permissions.
We do this with chmod command in terminal (change mode) as follows:

```sh
chmod a+x /where/i/saved/it/hello_world.sh # Give everyone execute permissions
# "a+x" means that for "all" users, "add" the "execute" access
# See COMP 3511 Chapter 10

# OR

chmod 700 /where/i/saved/it/hello_world.sh # Give read, write, execute permissions to the Owner
# 7, 0, 0 represent the permission for the owner, group and others respectively
# 0: no permission
# 1: execute
# 2: write
# 3: write and execute
# 4: read
# 5: read and execute
# 6: read and write
# 7: read, write, and execute
```

This will give the file the appropriate permissions so that it can be executed.
Now open a terminal and run the script like this:

```sh
/where/i/saved/it/hello_world.sh
```
