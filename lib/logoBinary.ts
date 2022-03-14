const base64EncodedLogo = `
iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAADNESURBVHgB7d0NkFX3ed/xBxAgJPFiKc1LJ4LV1J5kijQsdqbOSFGA2u5YamKWdOJI06SA1didaWJgmnimU6cslSet5WQAxZ2kniQLbTqWk4wBp7WmlS3AtpQ4Yxs0llx55BQWOrbT6gX0hgDB9vwuOtJqfV/O23Puuef5fmauFrEL3L337Pn//s//bd5MwgAAQCjzDQAAhEMAAAAgIAIAAAABEQAAAAiIAAAAQEAEAAAAAiIAAAAQEAEAAICACAAAAAREAAAAICACAAAAAREAAAAIiAAAAEBABAAAAAIiAAAAEBABAACAgAgAAAAERAAAACAgAgAAAAERAAAACIgAAABAQAQAAAACIgAAABAQAQAAgIAIAAAABEQAAAAgIAIAAAABEQAAAAiIAAAAQEAEAAAAAiIAAAAQEAEAAICACAAAAAREAAAAICACAAAAAREAAAAIiAAAAEBABAAAAAIiAAAAEBABAACAgAgAAAAERAAAACAgAgAAAAERAAAACIgAAABAQAQAAAACIgAAABAQAQAAgIAIAAAABEQAAAAgIAIAAAABEQAAAAiIAAAAQEAEAAAAAiIAAAAQEAEAAICACAAAAAREAAAAICACAAAAAREAAAAIiAAAAEBABAAAAAIiAAAAEBABAACAgAgAAAAERAAAACAgAgAAAAERAAAACIgAAABAQAQAAAACIgAAABAQAQAAgIAIAAAABEQAAAAgIAIAAAABEQAAAAiIAAAAQEAEAAAAAiIAAAAQEAEAAICACAAAAAREAAAAICACAAAAAREAAAAIiAAAAEBABAAAAAIiAAAAEBABAACAgAgAAAAERAAAACAgAgAAAAERAAAACIgAAABAQAQAAAACIgAAABAQAQAAgIAIAAAABEQAAAAgIAIAAAABEQAAAAiIAAAAQEAEAAAAAiIAAAAQEAEAAICACAAAAAREAAAAICACAAAAAREAAAAIiAAAAEBABAAAAAIiAAAAEBABAACAgAgAAAAERAAAACAgAgAAAAERAAAACIgAAABAQAQAAAACIgAAABAQAQAAgIAIAAAABEQAAAAgIAIAAAABEQAAAAiI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AiIAAAAQEAEAAICACAAAAAREAAAAICACAAAAAREAAAAIiAAAAEBABAAAAAIiAAAAEBABAACAgAgAAAAERAAAACAgAgAAAAERAAAACIgAAABAQAQAAAACIgAAABAQAQAAgIAIAAAABEQAAAAgIAIAAAABEQAAAAiIAAAAQEAEAAAAAiIAAAAQEAEAAICACAAAAAREAAAAICACAAAAAREAAAAIiAAAAEBABAAAAAIiAAAAEBABAACAgAgAAAAERAAAACAgAgAAAAERAAAACIgAAABAQAQAAAACIgAAABAQAQAAgIAIAAAABEQAAAAgIAIAAAABEQAAAAiIAAAAQEAEAAAAAiIAAAAQEAEAAICACAAAAAREAAAAICACAAAAAREAAAAIiAAAAEBABAAAAAIiAAAAEBABAACAgAgAAAAERAAAACAgAgAAAAERAAAACIgAAABAQAQAAAACIgAAABAQAQAAgIAIAAAABEQAAAAgIAIAAAABEQAAAAiIAAAAQEAEAAAAAiIAAAAQEAEAAICACAAAAAREAAAAICACAAAAAREAAAAIiAAAAEBABAAAAAIiAAAAEBABAACAgAgAAAAERAAAACAgAgAAAAERAAAACIgAAABAQAQAAAACIgAAABAQAQAAgIAIAAAABEQAAAAgIAIAAAABEQAAAAiIAAAAQEAEAAAAAiIAAAAQEAEAAICACAAAAAREAAAAICACAAAAAREAAAAIiAAAAEBABAAAAAIiAAAAEBABAACAgAgAAAAERAAAACAgAgAAAAERAAAACIgAAABAQAQAAAACIgAAABDQ/wf2kRkaDPxYAgAAAABJRU5ErkJggg==
`

export default base64EncodedLogo
