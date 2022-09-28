# Inventory List

## Welcome to my Inventory List app!


I created this single-page react app to help at my job since we use a lot of individual parts and the list is hard to sift through when you're trying to find a specific part.

This app allows you to add your own parts to the list, search specific parts, and check the price for the part based on a percentage markup (which is what we do at my job, except on a completely unorganized and messy excel spreadsheet!)

## Form

Add new parts to the inventory list using the Add Parts route.

The new part will be added at the end of the inventory list

## Filter

Use the search bar to search for a specific part based on the name or part number.

## Markup Percentage

Click the Markup button and you will sift through 3 different option: 0%, 25%, and 30%

The option selected determines how much extra the part will cost based on the markup percentage shown.

This is used to show the differences between what the part costs to buy (0%) and how much my job sells it for (25% or 30% depending on client contracts)

## Upcoming

In the future I hope to add a filter based on part category and maybe a sorting option to sort by alphabetical order, price, or category.

I would like to add a delete/edit option in case a part becomes discontinued or you make a mistake when adding a new part

I'm also considering maybe adding the number of parts in inventory, meaning I would need to add a PATCH request to update that number.