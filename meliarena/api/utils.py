def is_comparable(items):
    categories_ids = set([item.get("category_id") for item in items])

    return len(categories_ids) == 1

def filter_comparable_attributes(items):
    first_item = items[0]
    second_item = items[1]

    first_item_attrs_ids = [attr.get("id") for attr in first_item.get("attributes")]

    second_item_attrs_ids = [attr.get("id") for attr in second_item.get("attributes")]

    common_attrs_ids = set.intersection(
        set(first_item_attrs_ids), set(second_item_attrs_ids)
    )

    first_item["attributes"] = [
        attr
        for attr in first_item.get("attributes")
        if attr.get("id") in common_attrs_ids
    ]
    second_item["attributes"] = [
        attr
        for attr in second_item.get("attributes")
        if attr.get("id") in common_attrs_ids
    ]

    return items
