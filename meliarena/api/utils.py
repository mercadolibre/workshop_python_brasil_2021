def is_comparable(items):
    categories_ids = set([item.get("category_id") for item in items])

    return len(categories_ids) == 1


def filter_comparable_attributes(items):
    item_reference = items[0]

    item_reference_attrs_ids = [attr.get("id") for attr in item_reference.get("attributes")]
    common_attrs_ids = set()
    for item in items[1:]:
        current_item_attrs_ids = [attr.get("id") for attr in item.get("attributes")]
        common_attrs_ids = set.intersection(
            set(item_reference_attrs_ids), set(current_item_attrs_ids)
        )

    for item in items:
        item["attributes"] = [
            attr
            for attr in item.get("attributes")
            if attr.get("id") in common_attrs_ids
        ]

    return items
